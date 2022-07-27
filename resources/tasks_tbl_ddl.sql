IF EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'dbo' AND name like 'tasks')  
   DROP TABLE [dbo].[tasks];  
GO

CREATE TABLE tasks (
    taskID  INT IDENTITY(1,1) PRIMARY KEY,
    task varchar(255),
);



INSERT INTO tasks (task)
VALUES ('bring in the dog'), ('put out the kat'), ('yakaty yak'), ('don''t talk back');

select taskID, task from tasks