const app = express();
const port = process.env.PORT ?? 8080

app.get('/', (req, res) => {
    return res.json({ message: 'Hello, From The Server!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
