import { Fragment } from "react";
import Search from "./Search";
import avatar from "../../assets/avatar.png";

const data = {
  classes: [
    {
      name: "Class One",
      students: [
        {
          id: 1,
          name: "Alice Johnson",
          grade: "A+",
          percentage: "98%",
        },
        {
          id: 2,
          name: "Bob Smith",
          grade: "A",
          percentage: "92%",
        },
        {
          id: 3,
          name: "Charlie Davis",
          grade: "B+",
          percentage: "88%",
        },
        {
          id: 4,
          name: "Diana Martinez",
          grade: "A-",
          percentage: "91%",
        },
        {
          id: 5,
          name: "Edward Johnson",
          grade: "B",
          percentage: "85%",
        },
        {
          id: 6,
          name: "Fiona Brown",
          grade: "A+",
          percentage: "97%",
        },
        {
          id: 7,
          name: "George Wilson",
          grade: "B-",
          percentage: "82%",
        },
        {
          id: 8,
          name: "Helen Taylor",
          grade: "A",
          percentage: "94%",
        },
        {
          id: 9,
          name: "Ian Miller",
          grade: "B+",
          percentage: "89%",
        },
        {
          id: 10,
          name: "Julia Clark",
          grade: "A-",
          percentage: "90%",
        },
      ],
    },
    {
      name: "Class Two",
      students: [
        {
          id: 1,
          name: "Liam Anderson",
          grade: "A",
          percentage: "93%",
        },
        {
          id: 2,
          name: "Olivia Brown",
          grade: "B+",
          percentage: "87%",
        },
        {
          id: 3,
          name: "Noah Carter",
          grade: "A-",
          percentage: "90%",
        },
        {
          id: 4,
          name: "Emma Davis",
          grade: "B",
          percentage: "84%",
        },
        {
          id: 5,
          name: "Jackson Evans",
          grade: "A+",
          percentage: "96%",
        },
        {
          id: 6,
          name: "Ava Fisher",
          grade: "B-",
          percentage: "81%",
        },
        {
          id: 7,
          name: "Lucas Garcia",
          grade: "A",
          percentage: "94%",
        },
        {
          id: 8,
          name: "Sophia Hill",
          grade: "B+",
          percentage: "89%",
        },
        {
          id: 9,
          name: "Mason Irwin",
          grade: "A-",
          percentage: "91%",
        },
        {
          id: 10,
          name: "Isabella Johnson",
          grade: "B",
          percentage: "86%",
        },
      ],
    },
  ],
};

export default function StudentsTable() {
  return (
    <>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>

            <Search />
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Scores
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.classes.map((classData, classIndex) => (
                  <Fragment key={classIndex}>
                    <tr className="bg-white/5">
                      <td className="p-5 text-sm md:text-xl" colSpan="4">
                        {classData.name}
                      </td>
                    </tr>
                    {classData.students.map((student, studentIndex) => (
                      <tr
                        key={studentIndex}
                        className="border-b border-[#7ECEB529]"
                      >
                        <td className="p-5 text-sm md:text-xl">{student.id}</td>
                        <td className="p-5 text-sm md:text-xl">
                          <div className="flex space-x-3 items-center">
                            <img
                              className="w-8 h-8"
                              src={avatar}
                              width="32"
                              height="32"
                              alt={student.name}
                            />
                            <span className="whitespace-nowrap">
                              {student.name}
                            </span>
                          </div>
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.grade}
                        </td>
                        <td className="p-5 text-sm md:text-xl text-center">
                          {student.percentage}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
