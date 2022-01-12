class Employee:
    def __init__(self,Name,ID,Phone,Salary):
        self.Name = Name
        self.ID = ID 
        self.Phone = Phone 
        self.Salary = Salary
        self.reports = []
    
    def report(self, employee):
        message  = f'{self.Name} is reported {employee.Name}'
        self.reports.append(message)
        print(message)




class Manager(Employee):
    
    def __init__(self, Name, ID, Phone, Salary):
        super().__init__(Name, ID, Phone, Salary)
        self.workers = []
    
    def hire(self,NewWorker):
        print(f'{self.Name} is hiring {NewWorker.Name}')
        self.workers.append(NewWorker)
    def fire(self,ToFire):
        print(f'{self.Name} is firing {ToFire.Name}')
        self.workers.remove(ToFire)

    def report(self, employee):
        message  = f'Manager {self.Name} gave employee {employee.Name} a warning'
        self.reports.append(message)
        print(message)



def update_salary(employee,updated_salary):
    print(f'updating {employee.Name} salary from {employee.Salary} to {updated_salary}')
    employee.Salary = updated_salary

Thien = Employee("thien","123-456-7890",1,3000)
Rafay = Employee("Rafay","123-456-7891",2,3000)

Sevilay = Manager('Sevilay',"123-456-7892",3,4000)

Lee = Manager("Lee","123-456-7894",4,5000)


Lee.hire(Sevilay)
Sevilay.hire(Thien)
Sevilay.report(Thien)
Thien.report(Sevilay)
Sevilay.hire(Rafay)
Sevilay.fire(Rafay)
Lee.fire(Sevilay)
update_salary(Thien,4000)
update_salary(Sevilay,5000)

