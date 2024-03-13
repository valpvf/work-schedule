/*
  Warnings:

  - You are about to drop the column `personId` on the `Position` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionId" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dateBirthday" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "tlf" TEXT NOT NULL,
    "tlf2" TEXT,
    "out" TEXT
);
INSERT INTO "new_Person" ("address", "dateBirthday", "firstName", "id", "lastName", "out", "positionId", "surname", "tlf", "tlf2") SELECT "address", "dateBirthday", "firstName", "id", "lastName", "out", "positionId", "surname", "tlf", "tlf2" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE TABLE "new_Position" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL
);
INSERT INTO "new_Position" ("id", "position") SELECT "id", "position" FROM "Position";
DROP TABLE "Position";
ALTER TABLE "new_Position" RENAME TO "Position";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
