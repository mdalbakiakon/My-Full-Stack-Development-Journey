import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const params = useParams();
  const courseName = params.slug;

  return <div className="capitalize">{courseName} CourseDetail</div>;
};

export default CourseDetail;
