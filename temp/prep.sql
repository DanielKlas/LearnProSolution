-- CREATE TABLE learnproclient (
--     asset_tag VARCHAR(100) NOT NULL PRIMARY KEY,
--     assigned_to VARCHAR(100) NULL,
--     date_bought DATE,
--     date_decommissioned DATE NULL,
--     device_type VARCHAR(100),
--     operating_system VARCHAR(100)
--     );

-- INSERT INTO learnproclient (asset_tag, assigned_to, date_bought, date_decommissioned, device_type, operating_system)
-- VALUES
--     ("Edinburgh-Smartphone-1", NULL, "2023-06-03", "2023-06-08", "Smartphone", "Android"),
--     ("Edinburgh-Smartphone-2", "Daniel Klas", "2023-06-03", NULL, "Smartphone", "iOS"),
--     ("Glasgow-PDA-1", "Jonathan Joestar", "2023-04-01", NULL, "PDA", "Windows CE"),
--     ("Glasgow-PDA-2", "Ichigo Kurosaki", "2022-02-23", NULL, "PDA", "Windows CE"),
--     ("Falkirk-Printer-1", NULL, "2020-08-11", "2022-02-23", "Printer", "CUPS"),
--     ("Falkirk-Printer-2", "Peter Griffin", "2023-12-07", NULL, "Printer", "WPM"),
--     ("London-Laptop-1", "Daniel Klas", "2015-04-15", NULL, "Laptop", "Ubuntu"),
--     ("London-Laptop-2", "Daniel Klas", "2015-04-15", NULL, "Laptop", "Windows");

SELECT * FROM learnproclient;