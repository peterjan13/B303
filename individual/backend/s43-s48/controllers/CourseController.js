const Course = require("../models/Course.js");

module.exports.addCourse = (request, response) => {
  let new_course = new Course({
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
  });

  return new_course
    .save()
    .then((saved_course, error) => {
      if (error) {
        return response.send(false);
      }

      return response.send(true);
    })
    .catch((error) => response.send(error));
};

module.exports.getAllCourses = (request, response) => {
  return Course.find({}).then((result) => {
    return response.send(result);
  });
};

module.exports.getAllActiveCourses = (request, response) => {
  return Course.find({ isActive: true }).then((result) => {
    return response.send(result);
  });
};

module.exports.getCourse = (request, response) => {
  return Course.findById(request.params.id).then((result) => {
    return response.send(result);
  });
};

module.exports.updateCourse = (request, response) => {
  let updated_course_details = {
    name: request.body.name,
    description: request.body.description,
    price: request.body.price,
  };
  return Course.findByIdAndUpdate(
    request.params.id,
    updated_course_details
  ).then((course, error) => {
    if (error) {
      return response.send({
        message: error.message,
      });
    }
    return response.send({
      message: "Course has been updated successfully!",
    });
  });
};

module.exports.acrhiveCourse = (request, response) => {
  return Course.findByIdAndUpdate(request.params.id, { isActive: false }).then(
    (course, error) => {
      if (error) {
        return response.send(false);
      }
      return response.send(true);
    }
  );
};

module.exports.activateCourse = (request, response) => {
  return Course.findByIdAndUpdate(request.params.id, { isActive: true }).then(
    (course, error) => {
      if (error) {
        return response.send(false);
      }

      return response.send(true);
    }
  );
};

module.exports.searchCourses = (request, response) => {
  const courseName = request.body.courseName;
  return Course.find({ name: { $regex: courseName, $options: "i" } })
    .then((courses) => {
      response.send(courses);
    })
    .catch((error) =>
      response.send({
        message: error.message,
      })
    );
};
