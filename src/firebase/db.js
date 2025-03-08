// Firebase 관련 import
import { db } from "./config";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  query,
  orderBy,
} from "firebase/firestore";

// 이벤트 컬렉션 참조
const eventsCollectionRef = collection(db, "events");

// Create
export const addEvent = async (eventData) => {
  try {
    const docRef = await addDoc(eventsCollectionRef, {
      ...eventData,
      createdAt: new Date().toISOString(),
    });
    return { id: docRef.id, ...eventData };
  } catch (error) {
    console.error("Error adding event: ", error);
    throw error;
  }
};

// Read
export const getEvents = async () => {
  try {
    const q = query(eventsCollectionRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });
    return events;
  } catch (error) {
    console.error("Error getting events: ", error);
    throw error;
  }
};

// Update
// 아직 이벤트 수정 컴포넌트는 구현하지 않았지만 그래도 CRUD 함수를 다 만들어두고싶어서 만들었습니다
export const updateEvent = async (eventId, updatedData) => {
  try {
    const eventDoc = doc(db, "events", eventId);
    await updateDoc(eventDoc, updatedData);
    return { id: eventId, ...updatedData };
  } catch (error) {
    console.error("Error updating event: ", error);
    throw error;
  }
};

// Delete
export const deleteEvent = async (eventId) => {
  try {
    const eventDoc = doc(db, "events", eventId);
    await deleteDoc(eventDoc);
    return eventId;
  } catch (error) {
    console.error("Error deleting event: ", error);
    throw error;
  }
};
