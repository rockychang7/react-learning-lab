import { createElement } from "react";
import { createRoot } from "react-dom/client";

// 这里演示通过createElement方法去创建html元素
const element = createElement("p", { id: "hello" }, "Hello World!");

createRoot(document.getElementById("root")).render(element);
