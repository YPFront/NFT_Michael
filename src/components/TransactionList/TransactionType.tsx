export interface TransactionType {
  text: string,
  date: string,
  type: 'CLAIM' | 'ACCEPTED' | 'ACCEPTED&PENDING' | 'REJECTED' | 'SOLD' | 'NORMAL',
  src: string,
}
