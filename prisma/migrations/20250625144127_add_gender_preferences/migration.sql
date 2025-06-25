-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "LookingFor" AS ENUM ('MALE', 'FEMALE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "gender" "Gender" DEFAULT 'MALE',
ADD COLUMN     "lookingFor" "LookingFor" DEFAULT 'FEMALE';
