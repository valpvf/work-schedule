-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionId" INTEGER NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "dateBirthday" DATETIME NOT NULL,
    "address" TEXT NOT NULL,
    "tlf" TEXT NOT NULL,
    "tlf2" TEXT NOT NULL,
    "out" TEXT NOT NULL
);
