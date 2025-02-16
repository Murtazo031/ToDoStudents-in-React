import { useState } from "react";
import Card from "./molecules/card";
import Button from "./molecules/atom/button";
import Input from "./molecules/atom/input";
import "./todoList.css";

export default function TodoList() {
  const [todoList, setdoList] = useState([
    {
      id: "1",
      studentsAvatar:
        "https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg",
      studentName: "Anna",
      coursStudiing: "React Native",
      studentStatus: false,
    },
    {
      id: "2",
      studentsAvatar:
        "https://images.vexels.com/media/users/3/140752/isolated/preview/17e31e592ab23bb0e8b2c0e76c0a4361-male-profile-avatar-5.png",
      studentName: "Jack",
      coursStudiing: "React Native",
      studentStatus: false,
    },
    {
      id: "3",
      studentsAvatar:
        "https://images.vexels.com/media/users/3/140752/isolated/preview/17e31e592ab23bb0e8b2c0e76c0a4361-male-profile-avatar-5.png",
      studentName: "Jordan",
      coursStudiing: "React Native",
      studentStatus: false,
    },
  ]);

  //SET ADD MODAL
  const [addModal, setAddModal] = useState(false);
  const [addStudetsAvatar, setAddStudentsAvatar] = useState("");
  const [addStudetsName, setAddStudentsName] = useState("");
  const [addCoursStudiing, setAddCoursStudiing] = useState("");

  //SET EDIT MODAL
  const [editModal, setEditModal] = useState(false);
  const [editStudetsAvatar, setEditStudentsAvatar] = useState("");
  const [editStudetsName, setEditStudentsName] = useState("");
  const [editCoursStudiing, setEditCoursStudiing] = useState("");
  const [studentsId, setStudentsId] = useState(null);

  //SET SEARCH
  const [search, setSearch] = useState("");

  //SET FILTER BY STATUS
  const [filterStatus,setFilterStatus] = useState("")

  //SET MODAL INFO
  const [infoModal,setInfoModal] = useState(false)

  //CHEK
  function cheked(id) {
    setdoList(
      todoList.map((todo) =>
        todo.id == id ? { ...todo, studentStatus: !todo.studentStatus } : todo
      )
    );
  }

  //DELETE
  function handleDelete(id) {
    setdoList(todoList.filter((todo) => todo.id != id));
  }

  //ADD
  function handleAdd() {
    setdoList([
      ...todoList,
      {
        studentsAvatar: addStudetsAvatar,
        studentName: addStudetsName,
        coursStudiing: addCoursStudiing,
        studentStatus: false,
        id: Date.now(),
      },
    ]);
    setAddStudentsAvatar("");
    setAddStudentsName("");
    setAddCoursStudiing("");
    setAddModal(false);
  }

  //EDIT
  function handleEdit(todo) {
    setStudentsId(todo.id);
    setEditStudentsAvatar(todo.studentsAvatar);
    setEditStudentsName(todo.studentName);
    setEditCoursStudiing(todo.coursStudiing);
    setEditModal(true);
  }

  function editStudent() {
    setdoList(
      todoList.map((todo) =>
        todo.id == studentsId
          ? {
              ...todo,
              studentsAvatar: editStudetsAvatar,
              studentName: editStudetsName,
              coursStudiing: editCoursStudiing,
            }
          : todo
      )
    );
    setEditStudentsAvatar("");
    setEditStudentsName("");
    setEditCoursStudiing("");
    setStudentsId(null);
    setEditModal(false);
  }

  //OPEN INFO
  function openInfo(todo) {
    setInfoModal(todo); // Передаём объект todo в состояние
  }
    

  return (
    <>
      <div className="navTodo">
        <h1 style={{ textAlign: "center" }}>Student Cards</h1>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "none",
            boxShadow: "0px 0px 2px grey",
            padding: "1.5vh",
            borderRadius: "10px",
            outline: "none",
          }}
          placeholder="search"
        />
      <select style={{
        padding:"1.5vh",
        borderRadius:"10px",
        fontWeight:"700",
        border:"none",
        outline:"none",
        boxShadow:"0px 0px 5px grey",
        width:"16vw"        
      }}
      value={filterStatus}
      onChange={(e)=>{setFilterStatus(e.target.value)}}
      >
        <option value="">ALL</option>
        <option value="true">Avtive</option>
        <option value="false">Inactive</option>
      </select>
        <Button
          Children={"Add +"}
          btnOnclick={() => setAddModal(!addModal)}
          bgColor={"black"}
          btnColor={"white"}
          p={"2vh"}
          brRadius={"10px"}
        />
      </div>
      <ul className="todoList">
        {todoList
          .filter((todo) => JSON.stringify(todo).includes(search))
          .filter((todo)=>todo.studentStatus.toString().includes(filterStatus))
          .map((todo) => (
            <li key={todo.id} style={{ listStyle: "none" }}>
              <Card
                studentsAvatar={todo.studentsAvatar}
                studentName={todo.studentName}
                coursStudiing={todo.coursStudiing}
                studentStatus={todo.studentStatus ? "Active" : "Inactive"}
                bgActive={todo.studentStatus ? "#7CFC00" : "#FF0000"}
                btnDivAtoms={
                  <>
                    <Input
                      type={"checkbox"}
                      chek={todo.studentStatus}
                      inpOnclick={() => cheked(todo.id)}
                    />
                    <Button
                      Children={"Delete"}
                      bgColor={"red"}
                      btnColor={"white"}
                      br={"none"}
                      brRadius={"10px"}
                      p={"1vh 3vh"}
                      btnShadow={"0px 0px 10px red"}
                      btnOnclick={() => handleDelete(todo.id)}
                    />
                    <Button
                      Children={"Edit"}
                      bgColor={"#008000"}
                      br={"none"}
                      p={"1vh 3vh"}
                      brRadius={"10px"}
                      btnColor={"white"}
                      btnShadow={"0px 0px 10px green"}
                      btnOnclick={() => handleEdit(todo)}
                    />
                    <Button
                    Children={"Ifo"}
                    bgColor={"grey"}
                    btnColor={"white"}
                    p={"1.3vh 1.5vh"}
                    br={"none"}
                    brRadius={"50%"}
                    btnShadow={"0px 0px 10px grey"}
                    btnOnclick={()=>openInfo(todo)}
                    />
                  </>
                }
              />
            </li>
          ))}
      </ul>

      {addModal && (
        <div className="modalAdd">
          <div className="addLayout">
            <div className="inpAdd">
              <Input
                placeholder={"Url"}
                inpValue={addStudetsAvatar}
                onchange={(e) => setAddStudentsAvatar(e.target.value)}
              />
              <Input
                placeholder={"Students name"}
                inpValue={addStudetsName}
                onchange={(e) => setAddStudentsName(e.target.value)}
              />
              <Input
                placeholder={"course"}
                inpValue={addCoursStudiing}
                onchange={(e) => setAddCoursStudiing(e.target.value)}
              />
            </div>
            <div className="btnAdd">
              <Button
                Children={"Cancel"}
                btnOnclick={() => setAddModal(false)}
                bgColor={"#FF0000"}
              />
              <Button
                Children={"Save"}
                btnOnclick={handleAdd}
                bgColor={"green"}
              />
            </div>
          </div>
        </div>
      )}

      {editModal && (
        <div className="modalEdit">
          <div className="editLayout">
            <div className="inpEdit">
              <h2
                style={{
                  color: "white",
                  fontWeight: "900",
                  textAlign: "center",
                  fontSize: "34px",
                }}
              >
                Edit
              </h2>
              <Input
                inpValue={editStudetsAvatar}
                onchange={(e) => setEditStudentsAvatar(e.target.value)}
              />
              <Input
                inpValue={editStudetsName}
                onchange={(e) => setEditStudentsName(e.target.value)}
              />
              <Input
                inpValue={editCoursStudiing}
                onchange={(e) => setEditCoursStudiing(e.target.value)}
              />
            </div>
            <div className="btnEdit">
              <Button
                Children={"Cancel"}
                btnOnclick={() => setEditModal(false)}
                bgColor={"red"}
              />
              <Button
                Children={"Save"}
                btnOnclick={editStudent}
                bgColor={"green"}
              />
            </div>
          </div>
        </div>
      )}
      {infoModal && typeof infoModal === "object" && (
  <div className="modalInfo">
    <Card
      studentsAvatar={infoModal.studentsAvatar}
      studentName={infoModal.studentName}
      coursStudiing={infoModal.coursStudiing}
    />
    <Button
      Children={"Close"}
      btnOnclick={() => setInfoModal(false)}
    />
  </div>
)}

    </>
  );
}
