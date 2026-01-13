import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/users",
  headers: {'Content-Type':'application/json'}
});

export default {
  getAll: async () => {
    try {
      const res = await API.get("/");
      return res.data;
    } catch (err) {
      console.error("GET ERROR:", err);
    }
  },

  create: async (user) => {
    try {
      return await API.post("/", user);
    } catch (err) {
      console.error("CREATE ERROR:", err);
    }
  },

  update: async (id, user) => {
    try {
      return await API.put(`/${id}`, user);
    } catch (err) {
      console.error("UPDATE ERROR:", err);
    }
  },

  remove: async (id) => {
    try {
      return await API.delete(`/${id}`);
    } catch (err) {
      console.error("DELETE ERROR:", err);
    }
  }
};
