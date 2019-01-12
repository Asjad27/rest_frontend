<template>
    <div class="people">
        <table class="table table-bordered table-hover">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>City</th>
                <th>Age</th>
                <th>Occupation</th>
                <th>Annual Tax</th>
                <td><button class="btn btn-primary" @click="getPeople()">Refresh</button></td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in peopleData" :key="person.id" :row="person">
                <td>{{person.id}}</td>
                <td>{{person.name}}</td>
                <td>{{person.city}}</td>
                <td>{{person.age}}</td>
                <td>{{person.occupation}}</td>
                <td>{{person.annualTax}}</td>
                <td><b-button  v-b-modal="'personEditModal'" @click="setPerson(person)">Edit</b-button>
                    <button class="btn btn-danger" @click="deletePerson(person.id)">Delete</button></td>
            </tr>
            </tbody>
        </table>
        <b-modal id="personEditModal"
                 lazy:true
                 title="Person Data Edit"
                 @ok="editPerson"
                 ok-title="Save">
            <div>
                <b-form>
                    <b-form-group id="nameInputGroup"
                                  label="Name:">
                        <b-form-input id="nameInput"
                                      type="text"
                                      v-model="selectedPerson.name"
                                      required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="cityInputGroup"
                                  label="City:">
                        <b-form-input id="cityInput"
                                      type="text"
                                      v-model="selectedPerson.city"
                                      required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="ageInputGroup"
                                  label="Age:">
                        <b-form-input id="ageInput"
                                      type="number"
                                      v-model="selectedPerson.age"
                                      required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="occupationInputGroup"
                                  label="Occupation:">
                        <b-form-input id="occupationInput"
                                      type="text"
                                      v-model="selectedPerson.occupation"
                                      required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="annualTaxInputGroup"
                                  label="Annual Tax:">
                        <b-form-input id="annualTaxInput"
                                      type="number"
                                      v-model="selectedPerson.annualTax"
                                      requred>
                        </b-form-input>
                    </b-form-group>
                </b-form>
            </div>
        </b-modal>
    </div>
</template>

<script>
    import {PeopleService} from '../PeopleService';
    export default {
        name: 'People',
        data() {
            return {
                peopleData: [],
                selectedPerson: ''
            };
        },
        methods: {
            getPeople(){
                PeopleService.getPeople().then((data) => {
                    this.peopleData = data;
                });
            },
            editPerson(){
                PeopleService.editPerson(this.selectedPerson);
                this.selectedPerson = '';
            },
            setPerson(person){
                this.selectedPerson = person;
            },
            deletePerson(id){
                PeopleService.deletePerson(id);
                const index = this.peopleData.findIndex(person => person.id === id);
                if (~index)
                    this.peopleData.splice(index, 1);
            }
        },
        mounted() {
            this.getPeople();
        }
    }
</script>