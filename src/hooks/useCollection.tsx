import {
  collection,
  DocumentData,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase";

export const useCollection = (transaction: string) => {
  const [documents, setDocuments] = useState<null | DocumentData[]>(null);

  const q = query(
    collection(appFireStore, transaction),
    where("isVisible", "==", true),
    orderBy("createdTime", "desc")
    // limit(5)
  );

  useEffect(() => {
    console.log("FireStore Access");
    let result: any[] = [];
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        result.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(result);
    });
    // 의존 배열에 q 추가 금지
  }, []);

  return { documents };
};
