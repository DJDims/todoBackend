import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('Todo list api')
		.setVersion('1.0')
		// .addBearerAuth(
		// 	{
		// 		description: `[just text field] Please enter token in following format: Bearer <JWT>`,
		// 		name: 'Authorization',
		// 		bearerFormat: 'Bearer',
		// 		scheme: 'Bearer',
		// 		type: 'http',
		// 		in: 'Headers'
		// 	},
		// 	'token',
		// )
		.build()

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document)


	await app.listen(3000);
}
bootstrap();
