import axios from 'axios';
const url = 'http://localhost:8080';
export class PeopleService{
    static getPeople() {
        const getPeopleURL = `${url}/people/`;
        return axios.get(getPeopleURL).then(response => response.data);
    }
    static newPerson(person) {
        const newPersonURL = `${url}/people/`;
        return axios.post(newPersonURL, person);
    }
    static editPerson(person) {
      const editPersonURL = `${url}/people/${person.id}`;
      axios.put(editPersonURL, person);
    }
    static deletePerson(id) {
        const deletePersonURL = `${url}/people/${id}`;
        axios.delete(deletePersonURL);
    }
}