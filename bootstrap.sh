#!/bin/bash

docker-compose -v

if [ $? -ne 0 ]; then
    echo "Você precisa instalar o Docker Compose para iniciar o banco de dados"
    exit 1
fi

node -v

if [ $? -ne 0 ]; then
    echo "Você precisa ter o Node instalado na máquina para continuar"
    exit 1
fi

npm -v

if [ $? -ne 0 ]; then
    echo "Você precisa ter o NPM instalado para continuar"
    exit 1
fi

echo "Subindo banco de dados"
docker-compose up -d

if [ $? -eq 0 ]; then
    echo "O banco estará disponível na porta 64193"
fi

