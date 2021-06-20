<div align="center">

# TODXS CHALLENGE :milky_way:

<img alt="longRoadAhead" src="https://thumbs.gfycat.com/CanineSameEwe-small.gif" />
<blockquote >"If you want to improve, be content to be thought foolish and stupid"</blockquote>
</br>
</div>

## Install :wrench:

* Clone the repo and run ``yarn`` or ``npm install``

* To create the **docker** container based on the `ormconfig.example.json` we can do: ``docker run --name templateDB -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres``. To access the database you can use [DBeaver](https://dbeaver.io/). Highly recommended.

## thoughts and considerations

check out the ``concept.md`` for more information about the thought process I've had.

## :new_moon: TODOS

* [x] configure the project basis
  * [x] linters
  * [x] commit checker
  * [x] jest for tests
  * [x] prettier
* [x] configure basis of the project (database preset, express server...)
* [ ] create a simple user CRUD for the system
  * [x] CREATE
  * [ ] READ
  * [ ] UPDATE
  * [ ] DELETE
* [ ] implement business rules for the credit proposal
* [ ] implement tests in the service layer
* [ ] export routes for insomnia and postman
* [ ] check if the spelling is correct

## License

MIT License © Todxs Challenge
