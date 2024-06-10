-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Person" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "positionId" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone1" TEXT NOT NULL,
    "phone2" TEXT,
    "dateIn" TEXT NOT NULL,
    "dateOut" TEXT,
    CONSTRAINT "Person_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Person" ("address", "birthday", "dateIn", "dateOut", "firstName", "id", "lastName", "phone1", "phone2", "positionId", "surname") SELECT "address", "birthday", "dateIn", "dateOut", "firstName", "id", "lastName", "phone1", "phone2", "positionId", "surname" FROM "Person";
DROP TABLE "Person";
ALTER TABLE "new_Person" RENAME TO "Person";
PRAGMA foreign_key_check("Person");
PRAGMA foreign_keys=ON;
