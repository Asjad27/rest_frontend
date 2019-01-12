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
            </tr>
            </thead>
            <tbody>
            <tr v-for="person in peopleData">
                <td>{{person.id}}</td>
                <td>{{person.name}}</td>
                <td>{{person.city}}</td>
                <td>{{person.age}}</td>
                <td>{{person.occupation}}</td>
                <td>{{person.annualTax}}</td>
                <td><button class="btn btn-danger" @click="deletePerson(person.id)">Delete</button></td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {PeopleService} from '../PeopleService';
    export default {
        name: 'People',
        data() {
            return {
                peopleData: []
            };
        },
        methods: {
            getPeople(){
                PeopleService.getPeople().then((data) => {
                    this.peopleData = data;
                });
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