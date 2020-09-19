export default (req, res) => {

    const {
        query: { id }
    } = req;
    res.status(200).json({
        name: 'John doeeees',
        id,
        email: 'jDoe@test.com'
    })
}
