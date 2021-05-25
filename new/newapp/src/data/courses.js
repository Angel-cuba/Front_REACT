const coursesData = [
     {
          name: "Js",
          img: "/img/cat.jpg"
     },
     {
          name: "Tp",
          img: "/img/butterfly.jpg"
     },
     {
          name: "React",
          img: "/img/coffee.jpg"
     }
]

const coursesMapped = coursesData.map((courseData, index) => ({
  ...courseData,
  id: courseData.name,
}));

export default coursesMapped;