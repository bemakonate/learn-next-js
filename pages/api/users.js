
export default (req, res) => {
    res.status(200).json({
        name: 'John doe',
        id: 3,
        email: 'jDoe@test.com'
    })
}
