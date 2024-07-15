import { Course } from "../../models/Course";
import "./CourseTable.scss";

interface ICourseTableProps {
  course: Course;
}

export const CourseTable = ({ course }: ICourseTableProps) => {
  return (
    <section className="course__table-box">
      <h3>
        {course.language}: {course.subject}
      </h3>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Translation</th>
          </tr>
        </thead>
        <tbody>
          {course.words.map((word) => (
            <tr key={word.word}>
              <td>{word.word}</td>
              <td>{word.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
