export type SingleUser = { email: string; password: string };

export type SingleUserDatabase = SingleUser & { id: number };
