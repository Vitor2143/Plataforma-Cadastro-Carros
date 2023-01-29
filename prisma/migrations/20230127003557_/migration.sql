-- CreateTable
CREATE TABLE "Carros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigoConcess" TEXT NOT NULL,
    "nomeCarro" TEXT NOT NULL,
    "valorCarro" INTEGER NOT NULL,
    "marketPlace" BOOLEAN,
    "site" BOOLEAN,
    "anuncio" BOOLEAN
);
