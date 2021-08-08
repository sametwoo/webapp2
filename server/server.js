const express=require("express")
const cors=require('cors');
const app=express();

var corsOptions={
	origin: 'http://192.168.10.109:8081'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db=require('./app/models');
//developing
db.sequelize.sync({force: true}).then(()=>{
	console.log('drop and re-sync db.');
});
//production
//db.sequelize.sync();

app.get('/', (req,res)=>{
	res.json({msg: 'welcome'});
});

require('./app/routes/turorial.routes.js')(app)

const PORT=process.env.PORT||8080;

app.listen(PORT,()=>{
	console.log('server is running on port ${PORT}.');
});
