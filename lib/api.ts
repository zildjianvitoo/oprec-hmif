import {
  collection,
  doc,
  getDoc,
  getDocs,
  or,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export async function fetchCalonStaff(query?: string) {
  if (query === "akademik") {
    return getCalonStaffAkademik();
  }
  if (query === "administrasi") {
    return getCalonStaffAdministrasi();
  }
  if (query === "kastrad") {
    return getCalonStaffKastrad();
  }

  if (query === "kwu") {
    return getCalonStaffKWU();
  }

  if (query === "kominfo") {
    return getCalonStaffKominfo();
  }
  if (query === "pmb") {
    return getCalonStaffKominfo();
  }
  if (query === "psdm") {
    return getCalonStaffPSDM();
  }
  return getAllCalonStaff();
}

export async function getAllCalonStaff() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffDoc = await getDocs(calonStaffCollection);
    const calonStaffRes = calonStaffDoc.docs.map((doc) => ({
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
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      or(
        where("divisions", "array-contains", "Akademik - PTI"),
        where("divisions", "array-contains", "Akademik - PIP")
      )
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
      where("divisions", "array-contains", "Administrasi")
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
      where("divisions", "array-contains", "PSDM")
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
      )
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
      where("divisions", "array-contains", "KWU")
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
      )
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

async function getCalonStaffPMB() {
  try {
    const calonStaffCollection = collection(db, "calonStaff");
    const calonStaffAkademikQuery = query(
      calonStaffCollection,
      or(
        where("divisions", "array-contains", "PMB - Olahraga"),
        where("divisions", "array-contains", "PMB - Seni")
      )
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
