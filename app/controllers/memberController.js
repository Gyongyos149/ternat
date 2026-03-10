import Member from '../models/member.js'

const MemberController = {
    async index(req, res) {
        try {
            await MemberController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const members = await Member.findAll()
        res.status(200)
        res.json({
            success: true,
            data: members
        })
    },
    async show(req, res) {
        try {
            await MemberController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const member = await Member.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: member
        })
    },
    async store(req, res) {
        try {
            await MemberController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const member = await Member.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: member
        })
    },
    async update(req, res) {
        try {
            await MemberController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Member.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const member = await Member.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: member
        })
    },
    async destroy(req, res) {
        try {
            await MemberController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const member = await Member.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: member
        })
    }
}

export default MemberController
