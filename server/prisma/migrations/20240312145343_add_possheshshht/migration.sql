-- CreateTable
CREATE TABLE "Position" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "position" TEXT NOT NULL
);

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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
