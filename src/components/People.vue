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
        },
        mounted() {
            this.getPeople();
        }
    }
</script>