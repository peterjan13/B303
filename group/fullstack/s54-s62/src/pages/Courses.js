import coursesData from '../data/coursesData.js';
import CourseCard from '../components/CourseCard.js';

export default function Courses(){
	const courses = coursesData.map(course_item => {
		return (
			<CourseCard key={course_item.id} course={course_item}/>
		)
	})

	return(
		<>
			<h1>Courses</h1>
			{ courses }
		</>
	)
}
