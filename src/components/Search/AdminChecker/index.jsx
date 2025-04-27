import React, { useEffect, useState } from "react";
import { getCookieValue } from "../../../services/token";
import { handleDelete } from '../'

function AdminChecker() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Функция для парсинга JWT
    const parseJWT = (token) => {
      if (!token) return null;
      try {
        const payloadBase64 = token.split(".")[1]; // Извлекаем полезную нагрузку
        const payloadDecoded = atob(payloadBase64); // Декодируем Base64 строку
        return JSON.parse(payloadDecoded); // Преобразуем в объект
      } catch (error) {
        console.error("Invalid token format:", error);
        return null;
      }
    };

    // Получение токена из cookies
    const token = getCookieValue("token");
    if (token) {
      const parsedData = parseJWT(token);
      if (parsedData?.role === "admin") {
        setIsAdmin(true); // Устанавливаем флаг isAdmin
      }
    }
  }, []);

  return (
    <div>
      {isAdmin && (
          <FaTrash
          style={{ cursor: "pointer", color: "red", fontSize: "20px" }}
          onClick={handleDelete}
        />
      )}
    </div>
  );
}

export default AdminChecker;
