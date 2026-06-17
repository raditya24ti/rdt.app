import axios from 'axios'

const API_URL = "https://vdrwidshwlktwbknnwmp.supabase.co/rest/v1/admin"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkcndpZHNod2xrdHdia25ud21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE2MzYwNjYsImV4cCI6MjA5NzIxMjA2Nn0.3_LyZ84vbuz7eYQ2hvWkuW75wY7iBfAsXamb5ULUTGA"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
  async fetchNotes() {
    const response = await axios.get(API_URL, {
      headers,
    });

    return response.data;
  },

  async createNote(data) {
    const response = await axios.post(
      API_URL,
      data,
      { headers }
    );

    return response.data;
  },

  async deleteNote(id) {
    // PERBAIKAN: Sekarang URL sudah dibungkus dengan backtick (`)
    await axios.delete(
      `${API_URL}?id=eq.${id}`,
      { headers }
    );
  },
};