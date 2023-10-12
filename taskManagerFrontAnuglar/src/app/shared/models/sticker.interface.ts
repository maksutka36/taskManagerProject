
export interface Sticker {
  id: string;
  title: string;
  description: string | undefined;
  date: string;
  stickerStatus: "TODO" | "GO" | "DONE";
}
