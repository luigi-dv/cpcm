import { Lead } from '@prisma/client';
import { LeadSchemaInterface } from '@/schemas/leads/LeadSchemaInterface';

export const mapToLeadSchema = (lead: Partial<Lead>): LeadSchemaInterface => ({
  Route: lead.Route || null,
  Province: lead.Province || null,
  Category: lead.Category || null,
  CenterName: lead.CenterName || null,
  ContactPerson: lead.ContactPerson || null,
  Email: lead.Email || null,
  LeadClientStatus: lead.LeadClientStatus || null,
  Operation: lead.Operation || null,
  Position: lead.Position || null,
  Representative: lead.Representative || null,
  Department: lead.Department || null,
  Notes: lead.Notes || null,
  SpecificInvestigations: lead.SpecificInvestigations || null,
  Importance: lead.Importance || null,
  Phone: lead.Phone || null,
  InterestLevel: lead.InterestLevel || null,
  DemoStatus: lead.DemoStatus || null,
  Budget: lead.Budget || null,
  ProgrammingStatus: lead.ProgrammingStatus || null,
  LastContact: lead.LastContact || null,
});
