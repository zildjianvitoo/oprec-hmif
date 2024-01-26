import {
  collection,
  doc,
  getDoc,
  getDocs,
  or,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function fetchCalonStaff(dinasName?: string) {
  if (dinasName === "akademik") {
    return getCalonStaffAkademik();
  }
  if (dinasName === "administrasi") {
    return getCalonStaffAdministrasi();
  }
  if (dinasName === "kastrad") {
    return getCalonStaffKastrad();
  }

  if (dinasName === "kwu") {
    return getCalonStaffKWU();
  }

  if (dinasName === "kominfo") {
    return getCalonStaffKominfo();
  }
  if (dinasName === "pmb") {
    return getCalonStaffPMB();
  }
  if (dinasName === "psdm") {
    return getCalonStaffPSDM();
  }
  return getAllCalonStaff();
}

export async function getAllCalonStaff() {
  try {
    const calonStaffRef = collection(db, "calonStaff");
    const calonStaffQuery = query(calonStaffRef, orderBy("name", "asc"));
    const calonStaffDocs = await getDocs(calonStaffQuery);
    const calonStaffRes = calonStaffDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

export async function getCalonStaffById(id: string) {
  try {
    const calonStafRef = doc(db, "calonStaff", id);
    const calonStaffSnap = await getDoc(calonStafRef);

    return calonStaffSnap.data();
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffAkademik() {
  try {
    const calonStaffRef = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffRef,
      or(
        where("divisions", "array-contains", "Akademik - PTI"),
        where("divisions", "array-contains", "Akademik - PIP")
      ),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffAdministrasi() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      where("divisions", "array-contains", "Administrasi"),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffPSDM() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      where("divisions", "array-contains", "PSDM"),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffKastrad() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      or(
        where("divisions", "array-contains", "Kastrad - ADKAM"),
        where("divisions", "array-contains", "Kastrad - POLPRO")
      ),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffKWU() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      where("divisions", "array-contains", "KWU"),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

async function getCalonStaffKominfo() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      or(
        where("divisions", "array-contains", "KOMINFO - HUMAS"),
        where("divisions", "array-contains", "KOMINFO - MULMED")
      ),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}

export async function getCalonStaffPMB() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      or(
        where("divisions", "array-contains", "PMB - Olahraga"),
        where("divisions", "array-contains", "PMB - Seni")
      ),
      orderBy("name", "asc")
    );

    const querySnapshot = await getDocs(calonStaffAkademikQuery);
    const calonStaffRes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return calonStaffRes;
  } catch (error) {
    console.log(error);
  }
}
