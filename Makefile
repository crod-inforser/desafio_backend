include ./.env

database-up:
	docker-compose -f ./docker-compose.yml --env-file ./.env up -d
	sleep 2
populate-db:
	sed -i -e 's/\/M//g'  ./populate/import.sh
	docker cp ./populate $(MONGODB_CONTAINER_NAME):/tmp/populate
	docker exec $(MONGODB_CONTAINER_NAME) bash -c '/tmp/populate/import.sh localhost /tmp/populate'