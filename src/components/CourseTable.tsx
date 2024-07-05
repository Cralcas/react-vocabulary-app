import { Course } from "../models/Course";

interface ICourseTableProps {
  course: Course;
}

export const CourseTable = ({ course }: ICourseTableProps) => {
  return (
    <section>
      <h2>{course.language}</h2>
      <h3>{course.subject}</h3>
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
