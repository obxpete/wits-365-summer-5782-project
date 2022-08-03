USE witsExamples;

GO

IF EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'dbo' AND name like 'tasks')  
   DROP TABLE [dbo].[tasks];  
GO

CREATE TABLE tasks (
    taskID  INT IDENTITY(1,1) PRIMARY KEY,
    task varchar(255),
);



INSERT INTO tasks (task)
VALUES ('Put oil in Lichhers'), ('Clear and set diningroom table'), ('Bake Challah'), ('Set clean sheets for guests.'), ('Put up the blech'), ('Turn off all electronics');

select taskID, task from tasks