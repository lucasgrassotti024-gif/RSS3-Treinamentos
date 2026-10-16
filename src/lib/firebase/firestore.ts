import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
  DocumentData,
} from "firebase/firestore";
import { db, isFirebaseConfigured } from "./client";

/**
 * Módulo centralizado de acesso ao Cloud Firestore.
 * Nesta fase de integração inicial, estabelece as operações fundamentais
 * com verificação estrita de configuração sem alterar ou migrar coleções de produção.
 */

export function isFirestoreReady(): boolean {
  return Boolean(isFirebaseConfigured && db);
}

/**
 * Obtém documento de uma coleção específica
 */
export async function getFirestoreDocument<T = DocumentData>(
  collectionName: string,
  docId: string
): Promise<T | null> {
  if (!isFirestoreReady() || !db) return null;

  try {
    const docRef = doc(db, collectionName, docId);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return null;
    return snap.data() as T;
  } catch (error) {
    console.error(`[Firestore] Erro ao buscar documento em ${collectionName}/${docId}:`, error);
    return null;
  }
}

/**
 * Salva ou atualiza documento com merge seguro
 */
export async function setFirestoreDocument<T extends DocumentData>(
  collectionName: string,
  docId: string,
  data: T
): Promise<boolean> {
  if (!isFirestoreReady() || !db) return false;

  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, data, { merge: true });
    return true;
  } catch (error) {
    console.error(`[Firestore] Erro ao salvar documento em ${collectionName}/${docId}:`, error);
    return false;
  }
}

export { collection, doc, getDoc, getDocs, setDoc, updateDoc, query, where };
