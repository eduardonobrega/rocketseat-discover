import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({name: '', avatar: ''})

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };

    setStudents((prevState) => [...prevState, newStudent]);
  }

  useEffect(() => {
    async function fetchData() {
      const login = studentName || 'eduardonobrega'
      const data = await fetch(`https://api.github.com/users/${login}`).then(res => res.json())
      setUser({name: data.name, avatar: data.avatar_url})
    }

    fetchData()
  }, [students])

  return (
    <div className="container">
      
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={handleAddStudent}>Enviar</button>

      {students.map((student) => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time} 
        />
      ))}
    </div>
  );
}
