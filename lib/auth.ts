export const SESSION_COOKIE = "mh_session";
export const USER_COOKIE = "mh_user";

export type DummyUser = {
  name: string;
  email: string;
  password: string;
};

export const DUMMY_USERS: DummyUser[] = [
  { name: "David Hai", email: "admin@demo.com", password: "admin123" },
  { name: "Ayesha", email: "ayesha@demo.com", password: "password123" },
];

export function safeUserName(input: string | undefined) {
  const name = (input ?? "").trim();
  return name.length ? name.slice(0, 40) : "User";
}
