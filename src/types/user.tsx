import { Timestamp } from "firebase/firestore";

export interface UserInterface {
  email: string | null;
  uid: string;
  displayName: string | null;
  emailVerified: boolean;
  phoneNumber: string | null;
  photoURL: string | null;
  userDocument?: UserDocument;
}

export interface UserDocument {
  email: string;
  uid: string;
  how_did_hear: string;
  creation_date: Timestamp;
  onboardingIsCompleted: boolean;
  displayName: string;
  expertise: string;
  biography: string;
  photoURL: string | null;
}
