CREATE TABLE learnprosolution (
    asset_tag VARCHAR(100) NOT NULL PRIMARY KEY,
    assigned_to VARCHAR(100) NULL,
    date_bought DATE,
    date_decommissioned DATE NULL,
    device_type VARCHAR(100),
    operating_system VARCHAR(100)
    );

INSERT INTO learnprosolution (asset_tag, assigned_to, date_bought, date_decommissioned, device_type, operating_system)
VALUES
  ('London-Phone-01', NULL, '2023-06-06', NULL, 'Phone', 'Phone OS'),
  ('Manchester-Laptop-02', 'Ichigo Kurosaki', '2022-12-01', NULL, 'Laptop', 'Windows'),
  ('Birmingham-Tablet-01', 'Jonathan Joestar', '2022-11-15', NULL, 'Tablet', 'Android'),
  ('Glasgow-Smartwatch-01', 'David Brown', '2022-10-10', NULL, 'Smartwatch', 'Smartwatch OS'),
  ('Liverpool-Camera-01', NULL, '2022-09-01', NULL, 'Camera', 'Camera OS'),
  ('London-Phone-02', 'Sarah Johnson', '2022-08-15', NULL, 'Phone', 'Phone OS'),
  ('Manchester-Laptop-03', NULL, '2022-07-20', NULL, 'Laptop', 'Windows'),
  ('Birmingham-Tablet-02', 'Michael Wilson', '2022-06-10', NULL, 'Tablet', 'Android'),
  ('Glasgow-Smartwatch-02', NULL, '2022-05-05', NULL, 'Smartwatch', 'Smartwatch OS'),
  ('Liverpool-Camera-02', 'Emily Davis', '2022-04-01', NULL, 'Camera', 'Camera OS'),
  ('London-Phone-03', NULL, '2022-03-12', NULL, 'Phone', 'Phone OS'),
  ('Manchester-Laptop-04', 'Andrew Taylor', '2022-02-10', NULL, 'Laptop', 'Windows'),
  ('Birmingham-Tablet-03', 'Olivia Anderson', '2022-01-15', NULL, 'Tablet', 'Android'),
  ('Glasgow-Smartwatch-03', 'James Wilson', '2021-12-20', NULL, 'Smartwatch', 'Smartwatch OS'),
  ('Liverpool-Camera-03', NULL, '2021-11-25', NULL, 'Camera', 'Camera OS'),
  ('London-Phone-04', 'Emma Thompson', '2021-10-30', NULL, 'Phone', 'Phone OS'),
  ('Manchester-Laptop-05', NULL, '2021-09-05', NULL, 'Laptop', 'Windows'),
  ('Birmingham-Tablet-04', NULL, '2021-08-10', NULL, 'Tablet', 'Android'),
  ('Glasgow-Smartwatch-04', 'Michael Wilson', '2021-07-15', NULL, 'Smartwatch', 'Smartwatch OS'),
  ('Liverpool-Camera-04', 'Emily Davis', '2021-06-20', NULL, 'Camera', 'Camera OS'),
  ('London-Phone-05', NULL, '2021-05-25', NULL, 'Phone', 'Phone OS'),
  ('Manchester-Laptop-06', 'James Wilson', '2021-04-01', NULL, 'Laptop', 'Windows');