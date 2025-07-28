import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
export function generateRandomPassword(length = 10): string {
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export async function hashPassword(plain: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(plain, saltRounds);
}

export function generateShortNumericHash(input: string, length = 10): string {
  const hex = crypto.createHash('sha256').update(input).digest('hex');
  const digitsOnly = hex.replace(/[^0-9]/g, '');

  // Дутуу байвал нөхөж өгнө
  const padded = digitsOnly.padEnd(length, '0');

  return padded.slice(0, length);
}
