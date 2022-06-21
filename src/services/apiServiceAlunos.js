import  axios  from './axios'

class ApiServicelunos {

    getAllAlunos () {
        return axios.get('/alunos')
    }

}

export default new ApiServicelunos()



