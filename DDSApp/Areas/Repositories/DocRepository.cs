using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DDSApp.Areas.Abstractions;
using DDSApp.Models;


namespace DDSApp.Areas.Repositories
{
    public class DocRepository : EntityBaseRepository<Doc>, IDocRepository
    {
        public DocRepository(SpiralDocsContext context) : base(context) { }

        public void Add(Doc entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Doc> AllIncluding(params Expression<Func<Doc, object>>[] includeProperties)
        {
            throw new NotImplementedException();
        }

        public void Delete(Doc entity)
        {
            throw new NotImplementedException();
        }

        public void DeleteWhere(Expression<Func<Doc, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Doc> FindBy(Expression<Func<Doc, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Doc GetSingle(Expression<Func<Doc, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Doc GetSingle(Expression<Func<Doc, bool>> predicate, params Expression<Func<Doc, object>>[] includeProperties)
        {
            throw new NotImplementedException();
        }

        public void Update(Doc entity)
        {
            throw new NotImplementedException();
        }

        IEnumerable<Doc> IEntityBaseRepository<Doc>.GetAll()
        {
            throw new NotImplementedException();
        }

        Doc IEntityBaseRepository<Doc>.GetSingle(string id)
        {
            throw new NotImplementedException();
        }
    }
}