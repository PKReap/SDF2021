from dataclasses import dataclass

@dataclass()
class Ticket:
    Name : str 
    StartCity : str
    EndCity : str 
    Seat : str
    Type : str

@dataclass()
class Economy(Ticket):
    def check_in(self):
        print(f"{self.Name} please take your {self.Type} seat at {self.Seat} at the back of the plane")
            
@dataclass()
class Business(Ticket):
    Organization : str
    def check_in(self):
        print(f"{self.Name} from {self.Organization} please take your {self.Type} seat at {self.Seat} at the front of the plane")


class Check():
    def __init__(self, ticket : Ticket):
        self.ticket = ticket
    
    def check_in(self):
        self.ticket.check_in()
    
    def get_name(self):
        return self.ticket.Name



def verify(ticket):
    return ticket.get_name() != None
        
    
Collection = [Economy("THIEN","HOUSTON","NEW YORK","3C","MIDDLE"),Business("SEVILAY","HOUSTON","NEW YORK","1A","WINDOW","CHEVRON"),Economy("JAKE","HOUSTON","NEW YORK","3D","WINDOW")]

Tickets = [Check(ticket) for ticket in Collection]


for ticket in Tickets:
    if verify(ticket):
        ticket.check_in()
