/*
  Warnings:

  - Added the required column `personId` to the `Position` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Position" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL,
    "personId" INTEGER NOT NULL
);
INSERT INTO "new_Position" ("id", "position") SELECT "id", "position" FROM "Position";
DROP TABLE "Position";
ALTER TABLE "new_Position" RENAME TO "Position";
CREATE UNIQUE INDEX "Position_personId_key" ON "Position"("personId");
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
    "out" TEXT,
    CONSTRAINT "Person_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("address", "dateBirthday", "firstName", "id", "lastName", "out", "positionId", "surname", "tlf", "tlf2") SELECT "address", "dateBirthday", "firstName", "id", "lastName", "out", "positionId", "surname", "tlf", "tlf2" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
CREATE UNIQUE INDEX "Person_positionId_key" ON "Person"("positionId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
